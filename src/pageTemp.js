const genIntern = function (intern) {
return `
<div id="bgcolor" class="card column">
            <div class = "media">
            <div class="card text-center">
                <h2 class="card-title">${intern.name()}</h2>
                <h4 class="card-title">Title: ${intern.role()}</h4>
                    </div>
                     <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${intern.id()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.school()}</li>
        </ul>
        </div>
    </div>
</div>
`;
};
const genEngine = function (engineer) {
    return `
    <div id="bgcolor" class="card column">
                <div class = "media">
                <div class="card text-center">
                    <h2 class="card-title">${engineer.name()}</h2>
                    <h4 class="card-title">Title: ${engineer.role()}</h4>
                        </div>
                         <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${engineer.id()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email()}">${intern.email()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
            </div>
        </div>
    </div>
    `;
    };
const genManag = function (manager) {
        return `
        <div id="bgcolor" class="card employee-card manager-card">
               <div class= "card-header text-center">
                   <h2 class="card-title">${manager.name()}</h2>
                   <h4 class="card-title">Title: ${manager.role()}</h4>
         </div>
         <div class="card-body bg-light">
           <ul class="list-group text-dark">
           <li class="list-group-item">ID: ${manager.id()}</li>
           <li class="list-group-item">Email: <a href="mailto:${manager.email()}">${manager.email()}</a></li>
            <li class="list-group-item">Office number: <a href="tel:${manager.OfficeNumber()}">${manager.OfficeNumber()}</a></li>
                   </ul>
               </div>
           </div>
               `;
           };