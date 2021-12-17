console.log("Goodmorning !!")

export interface Mountain  {
    name: string;
    height: number;
}

export let mountains: Mountain[] = [
    {   name:"Kilimanjaro",
        height: 19341
    },
    {   name:"Everest",
        height: 29029
    },
    {   name:"Denali",
        height: 20310
    }

]
/*
export function findNameOfTallestMountain (mountainsArray: Mountain[]): string {
    
    for (let i=0; i<mountainsArray.length; i++) {
        if(mountainsArray[i].height > mountainsArray[i+1].height) {
           var theName = mountainsArray[i].height;
        } else {
           var theName = mountainsArray[i+1].height;
        } 
        if (theName > mountainsArray[i+2].height) {
            theName = theName;
        } else {
            theName = mountainsArray[i+2].height;
        }
        mountainsArray.filter(name.height);
    }
    //return Math.max.apply(null, mountainsArray); }
 */
///Demo in class   
export function findNameOfTallestMountain(mountains: Mountain[]): string {
    ///index of tallest mountain
    let tallestMountainIndex: number =0;
    let tallestMountainHeight: number = 0;
    for (let i=0; i<mountains.length; i++) {
        console.log(tallestMountainHeight);

        if (mountains[i].height > tallestMountainHeight) {
            tallestMountainIndex = i;
            tallestMountainHeight = mountains[i].height
        }
        return mountains[tallestMountainIndex].name;
    }
    ///if mountain height > tallest mounts height
    //take new mountain height as tallest
}

let tallestMountain:string = findNameOfTallestMountain(mountains);



//console.log(findNameOfTallestMountain(mountainsArray));
//console.log(Math.max(19341,29029,20310));