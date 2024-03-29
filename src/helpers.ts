const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1)

export function loadJSON(url: string, callback: Function = function () { }) {
  $.getJSON(url, data => callback(data))
}

export function loadScript(url: string, callback: Function = function () { }) {
  $.ajax({
    type: 'GET',
    dataType: 'script',
    cache: true,
    url,
    success: () => callback(),
  })
}

export function isURL(str: string): boolean {
  return /http/.test(str)
}

export function isString(obj: any): obj is string {
  return getType(obj) === 'String'
}
