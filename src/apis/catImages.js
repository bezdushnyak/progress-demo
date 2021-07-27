export const loadLargeCatImg = async (loadProgressCb) => {
    let xhr = new XMLHttpRequest();

    xhr.responseType = 'arraybuffer';

    xhr.open('GET', 'http://placekitten.com/10000/6000');
    xhr.send();

    const loadPromise = new Promise((resolve => {
        xhr.onload = function() {
            if (this.status === 200) {
                const uInt8Array = new Uint8Array(this.response);
                let length = uInt8Array.length;
                const binaryString = new Array(length);

                while (length--) {
                    binaryString[length] = String.fromCharCode(uInt8Array[length]);
                }

                const data = binaryString.join('');
                const base64 = btoa(data);

                resolve("data:image/png;base64," + base64);
            }
        };
    }))


    xhr.onprogress = function(event) {
        if (!event.lengthComputable) return;

        const { total, loaded } = event;
        const progress = {
            total,
            loaded,
        };
        loadProgressCb(progress);
    };

    return loadPromise;
};