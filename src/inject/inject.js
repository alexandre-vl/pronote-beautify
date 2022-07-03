chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (
      document.readyState === "complete" &&
      document.getElementsByClassName("EmploiDuTemps_Element")[0]
    ) {
      clearInterval(readyStateCheckInterval);
      var class_list = [
        {
          class_name: "objetBandeauEntete_menu",
          style: {
            backgroundColor: "#2E3440",
            alignItems: "center",
          },
        },
        {
          class_name: "ibe_util_photo",
          style: {
            display: "none",
          },
        },
        {
          class_name: "ObjetBandeauEspace",
          style: {
            display: "none",
          },
        },

        {
          class_name: "ObjetBandeauPied",
          style: {
            display: "none",
          },
        },

        {
          class_name: "footer-toggler",
          style: {
            display: "none",
          },
        },

        {
          class_name: "home",
          style: {
            borderRadius: "5px",
            marginLeft: "5px",
          },
        },
        {
          class_name: "item-selected",
          style: {
            backgroundColor: "#3B4252",
            borderRadius: "5px",
          },
        },
        {
          class_name: "bt-home",
          style: {
            color: "#ECEFF4",
          },
        },

        {
          class_name: "label-menu_niveau0",
          style: {
            borderColor: "#2E3440",
            borderBottom: "inherit",
          },
          all: true,
        },
        {
          class_name: "item-menu_niveau0",
          style: {
            transition: "none",
          },
          all: true,
        },

        {
          class_name: "SansMain",
          style: {
            display: "none",
          },
          all: true,
        },

        {
          class_name: "objetBandeauEntete_fullsize",
          style: {
            display: "none",
          },
        },

        {
          class_name: "AffichagePageAccueil",
          style: {
            backgroundColor: "#f8f9fb",
            backgroundImage: "none",
          },
        },

        {
          class_name: "menu-commandes",
          style: {
            backgroundColor: "#D8DEE9",
          },
        },

        {
          class_name: "EtiquetteCours",
          style: {
            backgroundColor: "#d8dee9 !important",
          },
          all: true,
        },

        {
          class_name: "EmploiDuTemps_Element",
          style: {
            borderRadius: "2px !important",
          },
          all: true,
        },
      ];

      var id_list = [
        {
          id_name: "GInterface.Instances[2]",
          style: {
            backgroundColor: "#f8f9fb",
          },
        },

        {
          id_name: "GInterface.Instances[0].Instances[1]",
          style: {
            marginLeft: "10px",
          },
        },
      ];

      var style = document.createElement("style");
      style.type = "text/css";
      css = `.label-menu_niveau0:hover {   color: #eceff4 !important;   background: #3b4252 !important; border-radius: 5px !important;}
		.label-menu_niveau0:focused-id {   color: #eceff4 !important;   background: #3b4252 !important; border-radius: 5px !important;} 
		.label-menu_niveau0:selected-item {   color: #eceff4 !important;   background: #3b4252 !important; border-radius: 5px !important;}
		.item-menu_niveau0.item-selected {color: #eceff4 !important;   background: #3b4252 !important; border-radius: 5px !important;}
		.item-menu_niveau0:hover, .item-menu_niveau0.focused-in, .item-menu_niveau0.item-selected {
		color: #eceff4 !important;   background: #3b4252 !important; border-radius: 5px !important;
		}

    .ObjetGrille .EtiquetteCours {background: #f8f9fb !important; border-radius: 2px !important;}	 
	  `;

      if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      document.getElementsByTagName("head")[0].appendChild(style);

      class_list.forEach((element) => {
        var elem = document.getElementsByClassName(element.class_name);
        if (elem[0] !== undefined) {
          if (element.all) {
            for (var i = 0; i < elem.length; i++) {
              for (let ie = 0; ie < Object.keys(element.style).length; ie++) {
                elem[i].style[Object.keys(element.style)[ie]] =
                  element.style[Object.keys(element.style)[ie]];
              }
            }
          } else {
            for (let ie = 0; ie < Object.keys(element.style).length; ie++) {
              elem[0].style[Object.keys(element.style)[ie]] =
                element.style[Object.keys(element.style)[ie]];
            }
          }
        }
      });

      id_list.forEach((element) => {
        var elem = document.getElementById(element.id_name);
        console.log(elem);
        if (elem !== null) {
          for (let i = 0; i < Object.keys(element.style).length; i++) {
            elem.style[Object.keys(element.style)[i]] =
              element.style[Object.keys(element.style)[i]];
          }
        }
      });
    }
  }, 10);
});
