/**
 * load script
 * @param {string} url - script url
 * @param {function} callback - successful callback
 */
export function loadScript(url: string, callback: Function = function () {}) {
  $.ajax({
    type: 'GET',
    dataType: 'script',
    cache: true,
    url,
    success: () => callback(),
  })
}
