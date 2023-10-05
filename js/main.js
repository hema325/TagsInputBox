
const input = document.querySelector(".tags-input"),
    remove = document.querySelector(".remove-all"),
    remaining = document.querySelector(".remaining-tags span");

const tags = [];
let remainingCount = 10;

const createTags = inputs => {
    inputs.forEach(tag => {
        const li = document.createElement("li");
        li.innerHTML = `${tag} <i class="fa-solid fa-x"></i>`;
        input.before(li);
        tags.push(li);

        li.lastElementChild.addEventListener("click", () => removeTag(li));
    })
}

const removeTag = tag => {
    const index = tags.indexOf(tag);
    tags[index].remove()
    remaining.textContent = ++remainingCount;
    tags.splice(index, index + 1);
}

const addTags = () => {
    if (remainingCount === 0)
        return;

    const tags = input.value.replace(/\s+/g, " ").split(",");
    input.value = "";

    if (tags.length > remainingCount)
        tags.length = remainingCount;

    remainingCount -= tags.length;
    remaining.textContent = remainingCount;

    createTags(tags);
}

const clearTags = () => {
    tags.forEach(tag => tag.remove());
    remainingCount += tags.length;
    remaining.textContent = remainingCount;
    tags.length = 0;
}

input.addEventListener("change", addTags);
remove.addEventListener("click", clearTags);
