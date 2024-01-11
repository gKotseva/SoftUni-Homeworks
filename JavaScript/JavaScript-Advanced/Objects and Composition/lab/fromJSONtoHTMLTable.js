function fromJasontoHTMLTable(input) {

    let result = []

    result.push('<table>')

    let data = JSON.parse(input)

    let props = Object.keys(data[0])
    result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`)

    for (let entry of data){
        result.push(`  <tr>${props.map(p => `<td>${escape(entry[p])}</td>`).join('')}</tr>`)
    }

    result.push('</table>')

    function escape(entry){
        return entry.toString().replace('<', '&let;').replace('>', '$gt;')
    }

    return result.join('\n')

}