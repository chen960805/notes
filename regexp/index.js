// 千分位分隔符正则  '123456789.123456'.replace(thousandSeparated,'$1,') => '123,456,789.123456'
const thousandSeparated = /(?<=^\-?\d*)(\d)(?=(?:\d{3})+(\.\d*)?$)/g