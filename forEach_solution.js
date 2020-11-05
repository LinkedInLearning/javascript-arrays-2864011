const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log("Score Over 65", score)

// Iterate over the scores array using forEach.
// Execute the logScores function if a score is over 65.

scores.forEach((element) => {
    if(element > 65) {
        logScore(element)
    }
})