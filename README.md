# Idea_Bomb
This is the social media app where users can post about ideas and have others review them with comments and likes. 
![mockup image]Idea_bomb_mockup.jpg
<li>As a user I want to be able to post ideas.</li>
<li>I want to be able to comment and like others ideas</li>
<li>I want to be able to edit the ideas ive posted.</li>
<li>I want to be able to delete my ideas.</li>
<li>I want to be able to create and delete my profile.</li>
<li>I want to be able to view someones page with all the ideas they've posted.</li>
<li>I want to be able to follow another user and have them populate in a page with just ideas from those i've followed</li>
| `Idea` | `likes' | `comments` | `User` | `follower` |
| ------ | ------- | ---------- | ------ | ---------- |
| id     | id      | id         | id     | id         |
| details | Idea_id | detail | Username |leader_id|
| has_many_likes | User_id | Idea_id | Password |follow_id|
| has_many_comments| |User_id | Name ||
| | | | Image | |