(function() {
  console.log('Main script exercice go !!!');
  // Exercice 1 Javascript type
  // Déclarer un array nommé collection
  // Insérer dans l'array 2 data de type string ('label one', 'done'), 1 data de type boolean, 1 data de type number
  // Enlever la première entrée de l'array collection
  // Transformer la première entrée (string) du tableau en majuscule -> toUpperCase();
  // Insérer cette valeur dans l'array collection
  // Créer une fonction nommée 'result' avec un paramètre (collection)
  // Cette fonction doit boucler sur l'array collection et logger chaque valeures du tableau -> loop for / console.log
  // Appeler la fonction result

  const collection = ['label one', 'done', true, 42];
  collection.shift(0);
  collection.unshift(collection[0].toUpperCase());

  function result(collection) {
    collection.forEach(function(item) {
      console.log(item);
    });
  }

  result(collection);

  // Exercice Object
  // Créer un objet appelé todoItem
  // 1 => Ajouter 2 keys nommées label et id avec comme value 'label one' et 1
  // 2 => Créer une troisieme key appelée button, cette key doit contenir un object
  // 3 => Dans cet objet button, créer une key nommée label avec la value 'done'
  // 4 => Ajouter une key 'class' qui contient un array de 3 strings "btn", "btn-sm", "btn-success"
  // 5 => Afficher dans la console 'label one', 'btn-success', 1 -> console.log()
  // Bonus => afficher 'btn-sm' avec 2 notations différentes

  const todoItemData = {
    label: 'label one',
    id: 1,
    button: {
      label: 'done',
      classes: ['btn', 'btn-sm', 'btn-success'],
    },
  };

  console.log(todoItemData.label);
  const button = todoItemData.button;
  console.log(button.classes[button.classes.length - 1]);
  console.log(todoItemData.id);
  console.log(button.classes[1]);
  console.log(button['classes'][1]);

  // Exercice 2 Dom manipulation

  // <ul>
  //   <li data-id="1">
  //   <span>Todo 1</span><a href="#" class="btn btn-sm btn-success">Done</a>
  //   </li>
  // <ul>

  // Récuperer le div qui contient l'ID result
  // 1 => Créer un élement ul
  // 2 => Créer un li avec l'attribut data-id="1" -> récuperer la valeur 1 dans le l'array collection -> setAttribute()
  // 3 => Insérer dans le li un element span avec la valeur du premier item de l'array collection -> collection[0]
  // 4 => Insérer dans le li un un element a avec les class suivantes "btn btn-sm btn-success" -> classList.add()
  // 5 => Cette élement doit avoir comme valeur le deuxieme item de l'array collection -> collection[1]
  // 6 => Inserer le li dans le ul

  const todoListNode = document.querySelector('#result ul');

  function displayTodoItem(todoItemData) {
    const todoItemNode = document.createElement('li');
    todoItemNode.setAttribute('data-id', todoItemData.id);

    const todoNameNode = document.createElement('span');
    const todoNameContent = document.createTextNode(todoItemData.label);
    todoNameNode.appendChild(todoNameContent);
    todoItemNode.appendChild(todoNameNode);

    const todoLinkNode = document.createElement('a');
    button.classes.forEach(function(cssClass) {
      todoLinkNode.classList.add(cssClass);
    });
    const todoLinkContent = document.createTextNode(button.label);
    todoLinkNode.appendChild(todoLinkContent);
    todoItemNode.appendChild(todoLinkNode);

    todoListNode.appendChild(todoItemNode);
  }

  // displayTodoItem(todoItemData);

  // Exercice 3 Events Dom

  // 1 => Récuper l'element form contenant l'id create
  // 2 => Ajouter un évènement submit à cette élement
  // 4 => Verifier que la valeur de l'input nameTodo ne soit pas vide
  // 5 => Si vide, ajouter une class 'has-warning' sur l'élement <div class="form-group "> et stopper l'évenement d'envoie du formulaire
  // 5 => Si input non vide, envoyer le formulaire

  const warningCssClass = 'bg-warning';

  const formNode = document.querySelector('#create');

  formNode.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('focus', function(event) {
      const inputNode = event.currentTarget;
      inputNode.classList.remove(warningCssClass);
    });
  });

  formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNode = document.querySelector('#nameTodo');
    if (inputNode.value === '') {
      inputNode.classList.add(warningCssClass);
      return false;
    } else {
      addTodoItem(inputNode.value);
      return false;
    }
  });

  function displayTodoItemFromXHR(response) {
    console.log(response);
    displayTodoItem(response.data);
  }

  function addTodoItem(value) {
    const payload = {
      val: value,
    };

    $.post('/add', payload, displayTodoItemFromXHR);
  }

  // Exercice 4 : Ajax call
  // 1 => Créer une function avec un parametre val
  // 2 => Créer dans cette function un requete post sur l'url '/add' à l'aide de l'objet new XMLHttpRequest();
  // 3 => Envoyer la requete a l'aide send et JSON.stringify()
  // 4  => A l'évènement onreadystatechange verifier le status et le readyState
  // 5 => SI readyState === 4 et request.status === 200 afficher la reponse du serveur a l'aide de JSON.parse();
})();
