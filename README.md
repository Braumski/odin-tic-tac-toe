# [The Odin Project Tic-Tac-Toe](https://braumski.github.io/odin-tic-tac-toe/)

This lesson involves closures practice, and designing a programs foundations before worrying about the UI, styling, or interacting with the dom. https://www.ayweb.dev/blog/building-a-house-from-the-inside-out This is an article that can be simplified into the phrase "Get the functionality working before making it pretty." Which is a design approach that I can appreciate because I spend way too much time trying to perfect the UI of tiny projects that I will never show to anyone 😆

## Model-View-Controller

While doing research for this lesson on things such as seperation of concerns, planning a project, and planning a programs structure, I ran into a design pattern called **Model View Controller** or MVC for short. I did a lot of reading on this idea and will share my resources here. Although MVC is more for huge codebases, I think I'll use it here anyways just to learn about it more. An MVC design pattern for such a simple project here will add a lot of boilerplate and complexity, but I'm just going to use this project to learn about MVC.

I don't think The Odin Projects creators intended a MVC pattern for this project, but they way they write their code seems to follow this pattern, a pattern I've never seen before. I've had trouble figuring ways to organize code on my previous projects so I'm going to give MVC a try for this project.
**I'll be honest, I'm not even sure if I did MVC correctly.** It's hard to find resources that give concrete examples of how it should be written, I just took concepts and applied them with a lot of assumptions.

- https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/

- https://www.sitepoint.com/mvc-design-pattern-javascript/

One thing I found very handy about this MVC design pattern is that console logging all of my data is as simple as console.log(Model). It logs all of my held data in just a short line, I love it. When I see the word "Model" or "View" I know exactly the kind of action being taken. Again I understand that this is a verbose design pattern for a tic-tac-toe project, but I just used it to learn.

## Event Delegation and Bubbling

Previously, I would add event listeners to every individual child object in forEach loops, but after doing some research I read that adding a single event listener to the common parent and then selecting the event target is much better for performance. This article helped me clarify that. https://www.freecodecamp.org/news/event-delegation-javascript/ I need to remember this in the future because I've looped event listeners many times and it's going to be a bad habit for me if I don't break it soon.

## Using AI to reduce repetetive code (DRY)

At one moment during the project, I had code that looked like this

```javascript
if (Model.isPlayer1Turn === true) {
  Model.gameBoard.splice(squareNum - 1, 1, Model.player1.letter);
  event.target.innerText = Model.player1.letter;
  Model.isPlayer1Turn = !Model.isPlayer1Turn;
  this.checkWin();
} else if (Model.isPlayer1Turn === false) {
  Model.gameBoard.splice(squareNum - 1, 1, Model.player2.letter);
  event.target.innerText = Model.player2.letter;
  Model.isPlayer1Turn = !Model.isPlayer1Turn;
  this.checkWin();
}
```

This felt repetetive, but I had trouble thinking of ways to reduce this code, so I asked an AI to reduce the repetition here and I really like the solution it came up with.

```javascript
const currentPlayer = Model.isPlayer1Turn ? Model.player1 : Model.player2;
Model.gameBoard.splice(squareNum - 1, 1, currentPlayer.letter);
event.target.innerText = currentPlayer.letter;
Model.isPlayer1Turn = !Model.isPlayer1Turn;
this.checkWin();
```

It created a new variable that checked whose turn it was, and then returned the exact data needed to make the code execute correctly no matter whose turn it was.

### Footnote

I spent way too much time on this project, but I'm happy with how it turned out.
