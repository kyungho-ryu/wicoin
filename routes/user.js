    var login = function(req, res) {
    console.log('user모듈 안에 있는 login 호출됨.');

    // 요청 파라미터 확인
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword);

    // 데이터베이스 객체 참조
    var database = req.app.get('database');

    // 데이터베이스 객체가 초기화된 경우, authUser 함수 호출하여 사용자 인증
    if (database.db) {
        authUser(database, paramId, paramPassword, function(err, docs) {
            // 에러 발생 시, 클라이언트로 에러 전송
            if (err) {
                console.error('사용자 로그인 중 에러 발생 : ' + err.stack);

                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 로그인 중 에러 발생</h2>');
                res.write('<p>' + err.stack + '</p>');
                res.end();

                return;
            }

            // 조회된 레코드가 있으면 성공 응답 전송
            if (docs) {
                console.dir(docs);

                // 조회 결과에서 사용자 이름 확인
                var username = docs[0].name;

                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});

                // 뷰 템플레이트를 이용하여 렌더링한 후 전송
                var context = {userid:paramId, username:username};
                req.app.render('login_success', context, function(err, html) {
                    if (err) {throw err;}
                    console.log('rendered : ' + html);

                    res.end(html);
                });

            } else {  // 조회된 레코드가 없는 경우 실패 응답 전송
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>로그인  실패</h1>');
                res.write('<div><p>아이디와 패스워드를 다시 확인하십시오.</p></div>');
                res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
                res.end();
            }
        });
    } else {  // 데이터베이스 객체가 초기화되지 않은 경우 실패 응답 전송
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<div><p>데이터베이스에 연결하지 못했습니다.</p></div>');
        res.end();
    }

};

    //아이디 찾기

    var find_id = function (req, res) {
        console.log('user 모듈 안에 있는 find_id 호출됨.');

        // URL 파라미터로 전달됨
        var paramTel = req.body.tel || req.query.tel || req.params.tel;

        console.log('요청 파라미터 : ' + paramTel);

        var database = req.app.get('database');

        if (database.db) {
            // 1. 글 리스트
            database.UserModel.findByTel(paramTel, function (err, results) {
                if (err) {
                    console.error('아이디 찾기 중 에러 발생 : ' + err.stack);

                    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                    res.write('<h2>ap 업데이트 중 에러 발생</h2>');
                    res.write('<p>' + err.stack + '</p>');
                    res.end();

                    return;
                }

                if (results == undefined || results.length < 1) {
                    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                    res.write('<script>alert("등록된 회원이 아닙니다.");' +
                        'location.href="/findid"</script>');
                    res.end();

                } else {
                    var context = {
                        user : results
                    };
                    req.app.render('find_id2', context, function (err, html) {

                        if (err) {
                            console.error('응답 웹문서 생성 중 에러 발생 : ' + err.stack);

                            res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                            res.write('<script>alert("응답 웹문서 생성 중 에러 발생" + err.stack);' +
                                'location.href="/"</script>');
                            res.end();
                            return;
                        }

                        res.end(html);
                    });




                }
            });
        } else {
            res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
            res.write('<h2>데이터베이스 연결 실패</h2>');
            res.end();
        }
    };

module.exports.login = login;
module.exports.find_id = find_id;
