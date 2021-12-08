// 数字格式化 new Intl.NumberFormat([locales[, options]])
numberFormat = new Intl.NumberFormat('zh', {
    useGrouping: true, // 是否使用千分位分隔符，默认为true
    minimumIntegerDigits: 1, // 使用的整数数字的最小数目，可能的值是从1到21,默认值是1.
    minimumFractionDigits: 2, // 使用的小数位数的最小数目.可能的值是从 0 到 20；默认为普通的数字和百分比格式为 0
    maximumFractionDigits: 2, // 小数位数的最大数目。可能的值是从 0 到 20；纯数字格式的默认值是minimumfractiondigits 和 3 中大的那一个
    // minimumSignificantDigits: 1, // 使用的有效数字的最小数目。可能的值是从1到21；默认值是1。如果设置此项或者下面一项，上面三个选项失效
    // maximumSignificantDigits: 21, // 使用的有效数字的最大数量。可能的值是从1到21；默认是 21。
})
numberFormat.format('123456.789') // '123,456.79'