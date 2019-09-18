import { pathExists, mkdirs, appendFile } from 'fs-extra';
import { join } from 'path';

class FileLog {
    constructor(pathname, filename) {
        this._pathname = pathname;
        this._filename = filename;
        this._fullfilename = join(this._pathname, this._filename);
        this._init = null;
        this._lines = [];
        this._writting = false;
        this.init();
    }

    init() {
        if (this._init === null) {
            this._init = pathExists(this._pathname)
                .then((exists) => {
                    if (exists) {
                        return;
                    } else {
                        return mkdirs(this._pathname);
                    }
                });
        }
        return this._init;
    }

    write(message) {
        this._lines.push(message);
        if (!this._writting) {
            this._writting = true;
            this._init = this.init().then(() => {
                let lines = this._lines.splice(0);
                this._writting = false;
                return appendFile(this._fullfilename, lines.join(''), { mode: 0o600 });
            });
        }
    }
}

export default class Log {
    constructor(params) {
        let { pathname, filename, filelog, data } = params || {};
        data = data || {};
        if (filelog !== undefined) {
            this._filelog = filelog;
        } else if (pathname !== undefined && filename !== undefined) {
            this._filelog = new FileLog(pathname, filename);
        }
        this._data = data
    }

    getData(name) {
        return this._data[name];
    }

    getSubLogger(data) {
        data = data || {};
        data = {...this._data, ...data};
        return new Log({ filelog: this._filelog, data });
    }

    _format(level, line, date) {
        const ip = (this.getData('ip') || '').padEnd(15, ' ');
        const user = (this.getData('user') || '').padEnd(12, ' ');
        level = level.padEnd(6, ' ');
        return `${date} ${ip} ${level} ${user} ${line}`;
    }

    add(level, line) {
        const date = (new Date()).toISOString().replace('T', ' ').replace('Z', '');
        const message = this._format(level, line, date);
        // this is not a debug line, it's the official way to output the logs in the console.
        console.log(message);
        if (this._filelog !== undefined) {
            this._filelog.write(message + '\n');
        } 
    }

    debug(line) { this.add('DEBUG', line); }
    info(line) { this.add('INFO', line); }
    warn(line) { this.add('WARN', line); }
    error(line) { this.add('ERROR', line); }
    fatal(line) { this.add('FATAL', line); }
}
