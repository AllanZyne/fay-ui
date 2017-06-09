
function sendGet(url) {
    return fetch(url).then(response => {
        // console.log(response);
        if (! response.ok) {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        } else if (! response.type != 'json') {
            var error = new Error('response is not json');
            error.response = response;
            throw error;
        }
        return response.json();
    })
}

function sendPostJson(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: [ {'Content-Type': 'application/json'} ],
        body: JSON.stringify(data),
    });
}


export function getProjectInfo(project) {
    return sendGet(`/api/project/${project}`);
}

export function getFilesList(project) {
    return sendGet(`/api/project/${project}/file`);
}

export function getFile(project, file) {
    return sendGet(`/api/project/${project}/file/${file}`);
}

export function getLines(project, file) {
    return sendGet(`/api/project/${project}/file/${file}/line`, { page: 0, per_page: 30 })
    .then(lines => {
        for (let line of lines) {
            let text = line.text,
                transText = line.transText ? line.transText : line.text;
            let speeker, tranSpeeker;
            let re_text = /^(Elmo|Helen|ハム|チェリ|エルモ|ヘレン|タベル|ハラペ|ガスパ|コレッ|モニカ|サラ|オット|ヴァネ|交渉Ａ|交渉Ｂ|ブラン)　+(.*)/;

            let matches = text.match(re_text);
            if (matches) {
                speeker = tranSpeeker = matches[1];
                text = matches[2];
            }
            matches = transText.match(re_text);
            if (matches) {
                transText = matches[2];
            }
            line.speeker = speeker;
            line.text = text;
            line.transText = transText;
            line.isEdit = false;
        }
        return lines;
    });
}

export function getLineHistory(lineId) {
    return sendGet(`/api/line/${lineId}/history`);
}

export function getUserInfo() {
    return sendGet('/api/user');
}
