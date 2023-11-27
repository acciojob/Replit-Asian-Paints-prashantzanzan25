//your JS code here. If required.
function changeColor() {
            var blockId = document.getElementById("block_id").value;
            var colorId = document.getElementById("colour_id").value;
            var blockElement = document.getElementById(blockId);

            if (blockElement) {
                // Set all grid items' background to transparent
                var gridItems = document.querySelectorAll(".grid-item");
                gridItems.forEach(function(item) {
                    item.style.backgroundColor = "transparent";
                });

                // Change the background color of the selected grid item
                blockElement.style.backgroundColor = colorId;
            } else {
                alert("Invalid Block ID");
            }
        }

        function resetColors() {
            // Set all grid items' background to transparent
            var gridItems = document.querySelectorAll(".grid-item");
            gridItems.forEach(function(item) {
                item.style.backgroundColor = "transparent";
            });
        }