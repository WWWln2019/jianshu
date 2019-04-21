class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader
    }

    upload() {
        return this.loader.file
            .then(
                file => new Promise((resolve, reject) => {
                    this._initRequest();
                    this._initListeners(resolve, reject, file);
                    this._sendRequest(file);
                }))
    }

    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8888/imgUpload", true)
        xhr.responseType = "json";
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener("load", () => {
            const response = xhr.response;

            response.urls = {
                default: 'http://example.com/images/image–default-size.png',
                '160': 'http://example.com/images/image–size-160.image.png',
                '500': 'http://example.com/images/image–size-500.image.png',
                '1000': 'http://example.com/images/image–size-1000.image.png',
                '1052': 'http://example.com/images/image–default-size.png'
            }
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            resolve({
                default: response.url
            });
        })

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    _sendRequest(file) {
        // Prepare the form data.
        const data = new FormData();

        data.append('upload', file);

        this.xhr.send(data);
    }
}

function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        return new MyUploadAdapter( loader );
    };
}
export default MyCustomUploadAdapterPlugin
