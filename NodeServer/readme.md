The backend for the assignment can be found here.</br>
You have to write the frontend for it using the following:
- HTML
- CSS
- Javascript with jQuery

Usage of css or other js libraries, frameworks result in failure.</br>
Lack of css and jQuery result in failure.</br>
Tempering with the server will result in failure. Change of port or host is allowed if neceserry, but the webpage should run on my server(app.js).</br>
If you cannot prove that you wrote the frontend(cannot change basic details, explain something) you will fail.</br>
Lack of method usage will result in failure.</br>
The features could be different from what you saw in the practice. Surprises, if they require at least equal amount of effort are welcome. 
Unnecessary files should not be stored in the repository!</br>
etc.<br>
The offered grade for the course will be given based on the quality of the code, the webpage, and your level of understanding.</br>
The assignments can be written during the practice classes after we learned about AJAX.</br>
The assignment can be evaulated after the middle of november. I, Adam Satan will evaulate it</br>

The following methods can be found in the server with these urls:
- manufacturers: returns a json containing every manufacturer in the "database"
- manufacturerNames: return the names of the manufacturers. Should be used in forms
- cars: returns a json containing every car in the "database"
- manufacturer: returns the cars that belong to that manufacturer stored in cookies
- addCar: adds a new car to the "database". If there is a car with that name in the db returns a 409 http error code.
- addManufacturers: see addCar, but with manufacturer
- /: returns the index.html stored in the student folder which you have to create.

The created webpage doesn't have to be responsive</br>
Only the index.html file should contain a body tag, the rest of the content have be loaded using jQuery.</br>
css files should be stored in the css folder</br>
js files should be stored in the js folder</br>
images should be stored in the images folder</br>
