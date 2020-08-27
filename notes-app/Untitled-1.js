// Unix Epoch - January 1st 1970 00:00:00

const date1 = new Date('March 1 2018 01:22:32')
const date1_timeStamp = date1.getTime()

const date2 = new Date()
const date2_timeStamp = date2.getTime()

if(date1_timeStamp < date2_timeStamp) {
    console.log(date1.toString())
} else if(date2_timeStamp < date1_timeStamp) {
    console.log(date2.toString())
}