# Project Overview

## Project Links

- [add your github repo link](https://github.com/Lofredoa1/project2)
- [add your deployment link](https://project2-six-liard.vercel.app/)

## Project Description

This site allows the user to view past hitting or pitching stats for MLB players in a given season defined by the user that are currently on an active MLB roster. This was built on React and allows the user to navigate through different pages in a user friendly manner and has the ability to save a list of favorite players. 

## API

The data for this website is being pulled from MLB DATA API which can be referenced [here](https://appac.github.io/mlb-data-api-docs/#top).

```
{
  "roster_40": {
    "copyRight": " Copyright 2021 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt  ",
    "queryResults": {
      "created": "2021-08-02T11:40:57",
      "totalSize": "42",
      "row": [
	{
			"position_txt": "RF",
			"weight": "282",
			"name_display_first_last": "Aaron Judge",
			"college": "Fresno State",
			"height_inches": "7",
			"starter_sw": "",
			"jersey_number": "99",
			"end_date": "",
			"name_first": "Aaron",
			"bats": "R",
			"team_code": "nya",
			"height_feet": "6",
			"pro_debut_date": "2016-08-13T00:00:00",
			"status_code": "A",
			"primary_position": "9",
			"birth_date": "1992-04-26T00:00:00",
			"team_abbrev": "NYY",
			"throws": "R",
			"team_name": "New York Yankees",
			"name_display_last_first": "Judge, Aaron",
			"name_use": "Aaron",
			"player_id": "592450",
			"name_last": "Judge",
			"team_id": "147",
			"start_date": "2016-08-13T00:00:00",
			"name_full": "Judge, Aaron"
			},
	}
  }
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Design](https://i.imgur.com/d58nBgm.jpg)
- [Desktop Design](https://i.imgur.com/ew0fjMu.jpg)
- [React architecture](https://docs.google.com/drawings/d/1xYG-2l2CpgQRnNcieQLyhsVUcwq13ajRplZYhFOy4Ps/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Pull data with multiple external api calls 
- Render player stats on page 
- Allow user to save list of favorite players
- Clickable components to allow user is able to navigate through the site
- Header that allows you to switch 

#### PostMVP EXAMPLE

- Add ability for user to see projected stats for a selected year
- Add individual team logos and styling
- Sort team rosters by position and populate screen like a real baseball diamond

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```