function Lecturer() {
    this.Id;
    this.FirstName;
    this.SurName;
    this.DayOfBirth;
    this.Gender;

    this.Email;

    this.CreatedAt;
    this.UpdatedAt;
    this.DeletedAt;
}

/*
Model: Tinderizes
Simulation of enumeration in JavaScript
0 = not known,
1 = male,
2 = female,
9 = not applicable.
*/
var Tinderizes = {
    NEUTRAL: 0,
    LIKE: 1,
    DISLIKE: 2,
    properties: {
        0: {id:0, name:'Neutral'},
        1: {id:1, name:'Like'},
        2: {id:2, name:'Dislike'}
    }
};

/*
Model: Genders
Simulation of enumeration in JavaScript
0 = not known,
1 = male,
2 = female,
9 = not applicable.
*/
function TinderizeLecturer() {
    this.UserId;
    this.LecturerId;
    this.Tinderize;

    this.CreatedAt;
    this.UpdatedAt;
    this.DeletedAt;
};