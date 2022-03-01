(function () {
  console.log("Main script exercice go !!!");
  // Exercice 1 Javascript type
  // Déclarer un array nommé collection
  // const collection = new Array[];
  const collection = ["label one", "done", true, 42];

  // Pousser dans l'array 2 data de type string ('label one', 'done'), 1 data de type boolean, 1 data de type number
  // collection.push("label one", "done", true, 42);

  // Enlever la première entrée de l'array collection
  collection.shift();

  // Transformer la première entrée (string) du tableau en majuscule -> toUpperCase();
  collection.unshift(collection[0].toUpperCase());

  // Insérer au début cette valeur dans l'array collection

  // Créer une fonction nommée 'result' avec un paramètre (collection)
  // Cette fonction doit boucler sur l'array collection et logger chaque valeures du tableau -> loop for / console.log
  // var result = function(tab) {
  //   for (let i=0; i<collection.length; i++) {
  //     console.log(collection[i]);
  //   }

    return collection;

    for (let elt in collection) {
      console.log(elt);
    }
  }

  // Appeler la fonction result
  result(collection);

  // Exercice Object
  // Créer un objet appelé todoItemData
  // 1 => Ajouter 2 keys nommées label et id avec comme value 'label one' et 1
  // 2 => Créer une troisieme key appelée button, cette key doit contenir un object
  // 3 => Dans cet objet button, créer une key nommée label avec la value 'done'
  // 4 => Ajouter une key 'classes' qui contient un array de 3 strings "btn", "btn-sm", "btn-success"
  // 5 => Afficher dans la console 'label one', 'btn-success', 1 -> console.log()
  // Bonus => afficher 'btn-sm' avec 2 notations différentes

  // Exercice 2 Dom manipulation

  // <ul>
  //   <li data-id="1">
  //     <span>Todo 1</span><a href="#" class="btn btn-sm btn-success">Done</a>
  //   </li>
  // <ul>

  // Récuperer le div qui contient l'ID result
  // 1 => Créer un élement ul
  // 2 => Créer un li avec l'attribut data-id="1" -> récuperer la valeur 1 dans todoItemData -> setAttribute()
  // 3 => Insérer dans le li un element span avec la valeur label de todoItemData
  // 4 => Insérer dans le li un un element a avec les classes suivantes "btn btn-sm btn-success" -> classList.add()
  // 5 => Cette élement doit avoir comme valeur textuelle la propriétré "label" de l'objet todoItemData.button
  // 6 => Inserer le li dans le ul

  // displayTodoItem(todoItemData);

  // Exercice 3 Events Dom

  // 1 => Récuper l'element form contenant l'id create
  // 2 => Ajouter un évènement submit à cette élement
  // 3 => Verifier que la valeur de l'input nameTodo ne soit pas vide
  // 4 => Si vide, ajouter une class 'has-warning' sur l'élement <div class="form-group "> et stopper l'évenement d'envoie du formulaire
  // 5 => Si input non vide, envoyer le formulaire

  // Exercice 4 : Ajax call
  // 1 => Créer une function `addTodoItem` avec un parametre value
  // 2 => Créer dans cette function un requete post sur l'url '/add' à l'aide de l'objet new XMLHttpRequest();
  // 3 => Préparer un header JSON pour cette requête
  // 4 => Envoyer la requete a l'aide send et JSON.stringify()
  // 5  => A l'évènement onreadystatechange verifier le status et le readyState
  // 6 => SI readyState === 4 et request.status === 200 afficher la reponse du serveur a l'aide de JSON.parse();
})();
