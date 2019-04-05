window.sprayWidget = (() => {
  const sprayClasses = [
    "pri",
    "pri.text",
    "pri.hover",
    "pri.bordered",
    "pri.trans-light",
    "pri.trans-light.text",
    "pri.trans-light.hover",
    "pri.trans",
    "pri.trans.text",
    "pri.trans.hover",
    "pri.trans-heavy",
    "pri.trans-heavy.text",
    "pri.trans-heavy.hover",
    "c1p",
    "c1p.text",
    "c1p.hover",
    "c1p.bordered",
    "c1p.trans-light",
    "c1p.trans-light.text",
    "c1p.trans-light.hover",
    "c1p.trans",
    "c1p.trans.text",
    "c1p.trans.hover",
    "c1p.trans-heavy",
    "c1p.trans-heavy.text",
    "c1p.trans-heavy.hover",
    "c2p",
    "c2p.text",
    "c2p.hover",
    "c2p.bordered",
    "c2p.trans-light",
    "c2p.trans-light.text",
    "c2p.trans-light.hover",
    "c2p.trans",
    "c2p.trans.text",
    "c2p.trans.hover",
    "c2p.trans-heavy",
    "c2p.trans-heavy.text",
    "c2p.trans-heavy.hover",
    "c3p",
    "c3p.text",
    "c3p.hover",
    "c3p.bordered",
    "c3p.trans-light",
    "c3p.trans-light.text",
    "c3p.trans-light.hover",
    "c3p.trans",
    "c3p.trans.text",
    "c3p.trans.hover",
    "c3p.trans-heavy",
    "c3p.trans-heavy.text",
    "c3p.trans-heavy.hover",
    "sec",
    "sec.text",
    "sec.hover",
    "sec.bordered",
    "sec.trans-light",
    "sec.trans-light.text",
    "sec.trans-light.hover",
    "sec.trans",
    "sec.trans.text",
    "sec.trans.hover",
    "sec.trans-heavy",
    "sec.trans-heavy.text",
    "sec.trans-heavy.hover",
    "c1s",
    "c1s.text",
    "c1s.hover",
    "c1s.bordered",
    "c1s.trans-light",
    "c1s.trans-light.text",
    "c1s.trans-light.hover",
    "c1s.trans",
    "c1s.trans.text",
    "c1s.trans.hover",
    "c1s.trans-heavy",
    "c1s.trans-heavy.text",
    "c1s.trans-heavy.hover",
    "c2s",
    "c2s.text",
    "c2s.hover",
    "c2s.bordered",
    "c2s.trans-light",
    "c2s.trans-light.text",
    "c2s.trans-light.hover",
    "c2s.trans",
    "c2s.trans.text",
    "c2s.trans.hover",
    "c2s.trans-heavy",
    "c2s.trans-heavy.text",
    "c2s.trans-heavy.hover",
    "c3s",
    "c3s.text",
    "c3s.hover",
    "c3s.bordered",
    "c3s.trans-light",
    "c3s.trans-light.text",
    "c3s.trans-light.hover",
    "c3s.trans",
    "c3s.trans.text",
    "c3s.trans.hover",
    "c3s.trans-heavy",
    "c3s.trans-heavy.text",
    "c3s.trans-heavy.hover",
    "ter",
    "ter.text",
    "ter.hover",
    "ter.bordered",
    "ter.trans-light",
    "ter.trans-light.text",
    "ter.trans-light.hover",
    "ter.trans",
    "ter.trans.text",
    "ter.trans.hover",
    "ter.trans-heavy",
    "ter.trans-heavy.text",
    "ter.trans-heavy.hover",
    "c1t",
    "c1t.text",
    "c1t.hover",
    "c1t.bordered",
    "c1t.trans-light",
    "c1t.trans-light.text",
    "c1t.trans-light.hover",
    "c1t.trans",
    "c1t.trans.text",
    "c1t.trans.hover",
    "c1t.trans-heavy",
    "c1t.trans-heavy.text",
    "c1t.trans-heavy.hover",
    "c2t",
    "c2t.text",
    "c2t.hover",
    "c2t.bordered",
    "c2t.trans-light",
    "c2t.trans-light.text",
    "c2t.trans-light.hover",
    "c2t.trans",
    "c2t.trans.text",
    "c2t.trans.hover",
    "c2t.trans-heavy",
    "c2t.trans-heavy.text",
    "c2t.trans-heavy.hover",
    "c3t",
    "c3t.text",
    "c3t.hover",
    "c3t.bordered",
    "c3t.trans-light",
    "c3t.trans-light.text",
    "c3t.trans-light.hover",
    "c3t.trans",
    "c3t.trans.text",
    "c3t.trans.hover",
    "c3t.trans-heavy",
    "c3t.trans-heavy.text",
    "c3t.trans-heavy.hover",
    "qua",
    "qua.text",
    "qua.hover",
    "qua.bordered",
    "qua.trans-light",
    "qua.trans-light.text",
    "qua.trans-light.hover",
    "qua.trans",
    "qua.trans.text",
    "qua.trans.hover",
    "qua.trans-heavy",
    "qua.trans-heavy.text",
    "qua.trans-heavy.hover",
    "c1q",
    "c1q.text",
    "c1q.hover",
    "c1q.bordered",
    "c1q.trans-light",
    "c1q.trans-light.text",
    "c1q.trans-light.hover",
    "c1q.trans",
    "c1q.trans.text",
    "c1q.trans.hover",
    "c1q.trans-heavy",
    "c1q.trans-heavy.text",
    "c1q.trans-heavy.hover",
    "c2q",
    "c2q.text",
    "c2q.hover",
    "c2q.bordered",
    "c2q.trans-light",
    "c2q.trans-light.text",
    "c2q.trans-light.hover",
    "c2q.trans",
    "c2q.trans.text",
    "c2q.trans.hover",
    "c2q.trans-heavy",
    "c2q.trans-heavy.text",
    "c2q.trans-heavy.hover",
    "c3q",
    "c3q.text",
    "c3q.hover",
    "c3q.bordered",
    "c3q.trans-light",
    "c3q.trans-light.text",
    "c3q.trans-light.hover",
    "c3q.trans",
    "c3q.trans.text",
    "c3q.trans.hover",
    "c3q.trans-heavy",
    "c3q.trans-heavy.text",
    "c3q.trans-heavy.hover"
  ];
  widget = (spray) => {
    const widget = document.createElement("div");
    widget.classList.add("spray-widget");
    widget.appendChild(formInput("Selector:", "selector"));
    widget.appendChild(formSelect("Spray Class:", "sprayClass", sprayClasses));
    widget.appendChild(
      formButtons("Add Spray Classes", "Remove Spray Classes")
    );
    document.body.appendChild(widget);
    const addBtn = document.getElementById("spray-widget-add");
    addBtn.addEventListener("click", () => {
      const selector = widget.querySelector("[name='selector']").value;
      const sprayClass = widget.querySelector("[name='sprayClass']").value;
      spray.addToSelector(selector, sprayClass);
    });
    const removeBtn = document.getElementById("spray-widget-remove");
    removeBtn.addEventListener("click", () => {
      const selector = widget.querySelector("[name='selector']").value;
      const sprayClass = widget.querySelector("[name='sprayClass']").value;
      spray.removeFromSelector(selector, sprayClass);
    });
  };
  function formInput(label, value) {
    const groupElem = document.createElement("div");
    const labelElem = document.createElement("label");
    const inputElem = document.createElement("input");
    labelElem.textContent = label;
    inputElem.setAttribute("name", value);
    groupElem.appendChild(labelElem);
    groupElem.appendChild(inputElem);
    return groupElem;
  }
  function formSelect(label, value, options) {
    const groupElem = document.createElement("div");
    const labelElem = document.createElement("label");
    const selectElem = document.createElement("select");
    labelElem.textContent = label;
    selectElem.setAttribute("name", value);
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i].split(".").join(" ");
      option.textContent = options[i];
      selectElem.appendChild(option);
    }
    groupElem.appendChild(labelElem);
    groupElem.appendChild(selectElem);
    return groupElem;
  }
  function formButtons(add, remove) {
    const groupElem = document.createElement("div");
    const addElem = document.createElement("button");
    const removeElem = document.createElement("button");
    addElem.textContent = add;
    addElem.setAttribute("id", "spray-widget-add");
    removeElem.textContent = remove;
    removeElem.setAttribute("id", "spray-widget-remove");
    groupElem.appendChild(addElem);
    groupElem.appendChild(removeElem);
    return groupElem;
  }
  return widget;
})();
