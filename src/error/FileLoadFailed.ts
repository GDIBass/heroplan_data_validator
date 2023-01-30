class FileLoadFailed extends Error {
    private _filename: string;
    private _data: string;
    constructor(filename: string, data: string) {
        super(`File failed to load: ${filename}`);
        this._filename = filename;
        this._data = data;
    }

    get filename(): string {
        return this._filename;
    }

    get data(): string {
        return this._data;
    }
}

export default FileLoadFailed;