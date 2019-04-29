document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");

  const inputBlock = document.getElementById("input");
  const denseBlock = document.getElementById("dense");
  const dropoutBlock = document.getElementById("dropout");
  const activationBlock = document.getElementById("activation");
  //   const reshapeBlock = document.getElementById("reshape");
  const flattenBlock = document.getElementById("flatten");

  const lossFunctionSelector = document.getElementById(
    "loss-function-selector"
  );
  const optimizerSelector = document.getElementById("optimizer-selector");
  const exportBtn = document.getElementById("export-model-btn");
  const fileUploadBtn = document.getElementById("file-upload-btn");
  const fileSelector = document.getElementById("file-selector");

  const playground = document.getElementById("playground");

  var blockArray = [];
  var IDArray = [];

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

  exportBtn.onclick = () => {
    console.log("Exporting code");

    const loss = getSelectedOption(lossFunctionSelector);
    const opti = getSelectedOption(optimizerSelector);
    var hyperParams = [loss, opti];

    var exporter = new Exporter();
    exporter.exportCode(hyperParams, "hello", blockArray);
  };

  inputBlock.onclick = () => {
    console.log("Adding Input");

    var block = new Input([23, 23]);
    block.render(playground, blockArray, IDArray);

    blockArray.push(block);
    IDArray.push(block.getID());
  };

  denseBlock.onclick = () => {
    console.log("Adding Dense");

    var block = new Dense();
    block.render(playground, blockArray, IDArray);

    blockArray.push(block);
    IDArray.push(block.getID());
  };

  activationBlock.onclick = () => {
    console.log("Adding Activation");

    var block = new Activation();
    block.render(playground, blockArray, IDArray);

    blockArray.push(block);
    IDArray.push(block.getID());
  };

  dropoutBlock.onclick = () => {
    console.log("Adding Dropout");

    var block = new Dropout();
    block.render(playground, blockArray, IDArray);

    blockArray.push(block);
    IDArray.push(block.getID());
  };

  //   reshapeBlock.onclick = () => {
  //     console.log("Adding Reshape");
  //   };

  flattenBlock.onclick = () => {
    console.log("Adding Flatten");
  };
});
