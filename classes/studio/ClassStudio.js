//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, massKg, scores){
    this.name = name;
    this.massKg = massKg;
    this.scores = scores;
    } 
    addScore() {
        let addScore = addScore.push(scores); 
    }
}
    
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
let merryMaltice = new CrewCandidate("Merry Maltice", 1.5, [93,88,97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);
console.log(bubbaBear.scores);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.