class FileLoadFailed extends Error {
    public filename: string;
    public data: string;
    constructor(filename: string, data: string) {
        super(`File failed to load: ${filename}`);
        this.filename = filename;
        this.data = data;
    }
}

export default FileLoadFailed;