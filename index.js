module.exports.handler = (event, context, callback) => {
console.log('I am triggered')
console.log('Event Data:', JSON.stringify(event))
}