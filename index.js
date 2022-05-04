const fs=require("fs");
function decideWinner(p,c)
{
    if(p==c)
    {
        return -1
    }
    else if(p==0)
    {
        if(c==1)
        {
            return 1;
        }
        else if(c==2)
        {
            return 0;
        }
    }
    else if(p==1)
    {
        if(c==0)
        {
            return 0;
        }
        else if(c==2)
        {
            return 1;
        }
    }
    else if(p==2)
    {
        if(c==0)
        {
            return 1;
        }
        else if(c==1)
        {
            return 0;
        }
    }
}
function apiForGame()
{
    var options=["Rock","Paper","Scissor"];
    var players=[0,0,0,0]
    var data=[
        {
            player:["","","",""]
        },
        {
            Totals:[["-",0,0,0],
            [0,"-",0,0],
            [0,0,"-",0],
            [0,0,0,"-"]]
        }
    ]
    fs.writeFileSync("data.json",`[ `)
    for(k=0;k<50;k++)
    {
        for(i=0;i<players.length;i++)
    {
        players[i]=Math.floor(Math.random() * 3);
        data[0].player[i]=options[players[i]];
    }
    for(i=0;i<players.length;i++)
    {
        for(j=i+1;j<players.length;j++)
        {
                const s=decideWinner(players[i],players[j])
                if(s==-1)
                {
                    continue
                }
                else if(s==0)
                {
                    data[1].Totals[i][j]+=1
                }
                else
                {
                    data[1].Totals[j][i]+=1
                }
            }
        }
 if(k!=49)
 {
    fs.appendFileSync("data.json",`{"Iteration${k+1}":${JSON.stringify(data)}},\n`)
 }
 else
 {
    fs.appendFileSync("data.json",`{"Iteration50":${JSON.stringify(data)}}]\n`)
 }
    }
}

module.exports=apiForGame;