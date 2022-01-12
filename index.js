function superbowlWin(record)
{
    const win = record.find(i => i.result === 'W');
    console.log(win);
    if(win === undefined)
    {
        return undefined;
    }
    return win.year;
}
// const record = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
// superbowlWin(record);