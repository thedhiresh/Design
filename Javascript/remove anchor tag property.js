<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get the elements by class name
        var elements = document.getElementsByClassName("wp-post-image");
        
        // Convert HTMLCollection to an array and loop through each image
        Array.from(elements).forEach(function(image) {
            var parent = image.parentElement;
            if (parent.tagName === 'A') {
                // Remove the anchor tag while keeping the image
                parent.parentNode.insertBefore(image, parent);
                parent.parentNode.removeChild(parent);
            }
        });
    });
</script>
