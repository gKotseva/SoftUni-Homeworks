function extensibleObject() {
    const obj = {
      extend: function (template) {
        for (const parentProp of Object.keys(template)) {
          const templateElement = template[parentProp];
  
          if (typeof templateElement === "function") {
            Object.getPrototypeOf(obj)[parentProp] = templateElement;
          } else {
            obj[parentProp] = templateElement;
          }
        }
      },
    };
  
    return obj;
  }