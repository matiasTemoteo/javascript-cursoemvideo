var now = new Date();
var weekDay = now.getDay();

/*
    Creating conditional structure with 'switch' to
    goes by a list of possible values for the expression and
    runs code acordingly to the expected.
*/

switch(weekDay) {
    case 0: 
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('[Error] - Invalid weekday!!');
}
