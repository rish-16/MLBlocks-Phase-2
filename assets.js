function getBlockID() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getSelectedOption(sel) {
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt.value;
}

// -----------------------------------------------------------------------------------------------------------------------

var Input = function() {
  this.type = "Input";
  this.shape = null;
  this.blockID = getBlockID();
};

Input.prototype.getID = function() {
  return this.blockID;
};

Input.prototype.render = function(container, blockArray, IDArray) {
  var block = document.createElement("div");
  block.classList += "layer-block";
  var title = document.createElement("p");
  title.innerHTML = this.type;
  block.appendChild(title);

  block.addEventListener("dblclick", () => {
    var index = IDArray.indexOf(this.blockID);
    console.log(index);
    blockArray.splice(index, 1);
    IDArray.splice(index, 1);
    container.removeChild(block);
  });

  var hp = document.createElement("div");
  hp.style.display = "flex";
  hp.style.flexDirection = "row";
  hp.style.justifyContent = "space-evenly";

  var hpTitle = document.createElement("p");
  hpTitle.innerText = "Shape";

  var hpInput = document.createElement("input");
  hpInput.style.textAlign = "center";
  hpInput.style.width = "55%";
  hpInput.setAttribute("type", "text");
  hpInput.setAttribute("placeholder", "[784, ]");

  hpInput.addEventListener("change", e => {
    this.shape = e.target.value;
  });

  hp.appendChild(hpTitle);
  hp.appendChild(hpInput);

  block.appendChild(hp);

  container.appendChild(block);
  block.id = this.blockID;
};

// -----------------------------------------------------------------------------------------------------------------------

var Dense = function() {
  this.type = "Dense";
  this.units = 100;
  this.blockID = getBlockID();
};

Dense.prototype.getID = function() {
  return this.blockID;
};

Dense.prototype.render = function(container, blockArray, IDArray) {
  var block = document.createElement("div");
  block.classList += "layer-block";
  var title = document.createElement("p");
  title.innerHTML = this.type;
  block.appendChild(title);

  block.addEventListener("dblclick", () => {
    var index = IDArray.indexOf(this.blockID);
    console.log(index);
    blockArray.splice(index, 1);
    IDArray.splice(index, 1);
    container.removeChild(block);
  });

  var hp = document.createElement("div");
  hp.style.display = "flex";
  hp.style.flexDirection = "row";
  hp.style.justifyContent = "space-evenly";

  var hpTitle = document.createElement("p");
  hpTitle.innerText = "Units";

  var hpInput = document.createElement("input");
  hpInput.style.textAlign = "center";
  hpInput.style.width = "55%";
  hpInput.setAttribute("type", "text");
  hpInput.setAttribute("placeholder", "100");

  hpInput.addEventListener("change", e => {
    this.units = e.target.value;
  });

  hp.appendChild(hpTitle);
  hp.appendChild(hpInput);

  block.appendChild(hp);

  container.appendChild(block);
  block.id = this.blockID;
};

// -----------------------------------------------------------------------------------------------------------------------

var Activation = function() {
  this.type = "Activation";
  this.activationFunction = "relu";
  this.blockID = getBlockID();
};

Activation.prototype.getID = function() {
  return this.blockID;
};

Activation.prototype.render = function(container, blockArray, IDArray) {
  var block = document.createElement("div");
  block.classList += "layer-block";
  var title = document.createElement("p");
  title.innerHTML = this.type;
  block.appendChild(title);

  block.addEventListener("dblclick", () => {
    var index = IDArray.indexOf(this.blockID);
    console.log(index);
    blockArray.splice(index, 1);
    IDArray.splice(index, 1);
    container.removeChild(block);
  });

  var hp = document.createElement("div");
  hp.style.display = "flex";
  hp.style.flexDirection = "row";
  hp.style.justifyContent = "space-evenly";

  var hpTitle = document.createElement("p");
  hpTitle.innerText = "Function";

  var hpSelect = document.createElement("select");

  var z = document.createElement("option");
  z.setAttribute("value", "relu");
  var t = document.createTextNode("ReLU");
  z.appendChild(t);
  hpSelect.appendChild(z);

  var z = document.createElement("option");
  z.setAttribute("value", "sigmoid");
  var t = document.createTextNode("Sigmoid");
  z.appendChild(t);
  hpSelect.appendChild(z);

  var z = document.createElement("option");
  z.setAttribute("value", "tanh");
  var t = document.createTextNode("Tanh");
  z.appendChild(t);
  hpSelect.appendChild(z);

  hp.appendChild(hpTitle);
  hp.appendChild(hpSelect);

  hpSelect.addEventListener("change", e => {
    this.activationFunction = getSelectedOption(e.target);
  });

  block.appendChild(hp);

  container.appendChild(block);
  block.id = this.blockID;
};

// -----------------------------------------------------------------------------------------------------------------------

var Dropout = function() {
  this.type = "Dropout";
  this.prob = 0.25;
  this.blockID = getBlockID();
};

Dropout.prototype.getID = function() {
  return this.blockID;
};

Dropout.prototype.render = function(container, blockArray, IDArray) {
  var block = document.createElement("div");
  block.classList += "layer-block";
  var title = document.createElement("p");
  title.innerHTML = this.type;
  block.appendChild(title);

  block.addEventListener("dblclick", () => {
    var index = IDArray.indexOf(this.blockID);
    console.log(index);
    blockArray.splice(index, 1);
    IDArray.splice(index, 1);
    container.removeChild(block);
  });

  var hp = document.createElement("div");
  hp.style.display = "flex";
  hp.style.flexDirection = "row";
  hp.style.justifyContent = "space-evenly";

  var hpTitle = document.createElement("p");
  hpTitle.innerText = "Prob";

  var hpInput = document.createElement("input");
  hpInput.style.textAlign = "center";
  hpInput.style.width = "55%";
  hpInput.setAttribute("type", "text");
  hpInput.setAttribute("placeholder", "0.25");

  hpInput.addEventListener("change", e => {
    this.prob = e.target.value;
  });

  hp.appendChild(hpTitle);
  hp.appendChild(hpInput);

  block.appendChild(hp);

  container.appendChild(block);
  block.id = this.blockID;
};

// -----------------------------------------------------------------------------------------------------------------------

var Exporter = function() {
  this.codeString = "";
  this.dataset = null;
  this.hyperParams = null;
  this.imports = [];
  this.layers = [];
};

Exporter.prototype.getImports = function(currentBlock) {
  if (!this.imports.includes(currentBlock.type)) {
    if (currentBlock.type == "Input") {
      this.imports.push("Input");
    } else if (currentBlock.type == "Dense") {
      this.imports.push("Dense");
    } else if (currentBlock.type == "Activation") {
      this.imports.push("Activation");
    } else if (currentBlock.type == "Flatten") {
      this.imports.push("Flatten");
    } else if (currentBlock.type == "Reshape") {
      this.imports.push("Reshape");
    } else if (currentBlock.type == "Dropout") {
      this.imports.push("Dropout");
    }
  }
};

Exporter.prototype.buildCodeString = function(currentBlock) {
  if (currentBlock.type == "Input") {
    this.codeString += `model.add(Input(shape=[${currentBlock.shape}]))\n`;
  } else if (currentBlock.type == "Dense") {
    this.codeString += `model.add(Dense(units=${currentBlock.units}))\n`;
  } else if (currentBlock.type == "Activation") {
    this.codeString += `model.add(Activation('${
      currentBlock.activationFunction
    }'))\n`;
  } else if (currentBlock.type == "Flatten") {
    this.codeString += `model.add(Flatten())\n`;
  } else if (currentBlock.type == "Dropout") {
    this.codeString += `model.add(Dropout(${currentBlock.prob}))\n`;
  }
};

Exporter.prototype.exportCode = function(hyperParams, datasetFile, blockArray) {
  this.codeString += "import numpy as np\n";
  this.codeString += "from keras.models import Sequential\n";
  for (var i = 0; i < blockArray.length; i++) {
    var currentBlock = blockArray[i];
    this.layers.push(currentBlock.type);
    this.getImports(currentBlock);
  }

  this.codeString +=
    "from keras.layers import " + this.imports.join(", ") + "\n";
  this.codeString += "\n";
  this.codeString += "model = Sequential()\n";

  for (var i = 0; i < blockArray.length; i++) {
    var currentBlock = blockArray[i];
    this.buildCodeString(currentBlock);
  }

  this.codeString += `\nmodel.compile(loss='${hyperParams[0]}', optimizer='${
    hyperParams[1]
  }', metrics=['acc'])`;

  console.log(this.codeString);
};

Exporter.prototype.postCode = function() {
  // POST request to backend
};
