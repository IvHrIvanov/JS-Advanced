function solve(httpObj) {
    methodValidatiod(httpObj);
    methodUriValidation(httpObj);
    versionValidate(httpObj);
    messageValidation(httpObj);
    return httpObj;
    function methodValidatiod(httpObj) {
        let methodCanBe = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let methodInObj = 'method';
        if (httpObj[methodInObj] === undefined || !methodCanBe.includes(httpObj[methodInObj])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    };


    function methodUriValidation(httpObj) {
        let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;
        let uriName = 'uri';
        if (httpObj[uriName] === undefined || !uriRegex.test(httpObj[uriName])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function versionValidate(httpObj) {
        let versionCanBe = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        let versionName = 'version';

        if (httpObj[versionName] === undefined || !versionCanBe.includes(httpObj[versionName])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function messageValidation(httpObj) {
        let messageName = 'message';
        let regex = /^[^<>\\&'"]*$/;
        if (httpObj[messageName] === undefined || !regex.test(httpObj[messageName])) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}



try {

    console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'aaa'
    }));
}
catch (e) {
    console.log(e.message);
}