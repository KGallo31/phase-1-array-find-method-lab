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