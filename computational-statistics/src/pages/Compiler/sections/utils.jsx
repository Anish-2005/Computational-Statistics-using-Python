// Helper functions for encoding and decoding code
export const encodeCode = (str) => {
    try {
      return btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
      return btoa(
        unescape(
          encodeURIComponent(
            str.replace(/[\u0080-\u07ff]/g, m => 
              String.fromCharCode(
                0xc0 | m.charCodeAt(0) >> 6, 
                0x80 | m.charCodeAt(0) & 0x3f
              )
            )
          )
        )
      );
    }
  };
  
  export const decodeCode = (b64) => {
    return decodeURIComponent(escape(atob(b64)));
  };