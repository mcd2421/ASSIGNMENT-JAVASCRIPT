var tasksList = [];
var currentUser = null;

// Fungsi untuk melakukan login
function loginUser() {
    var userInput = document.getElementById("username");
    var loginContainer = document.getElementById("loginContainer");
    var todoApp = document.getElementById("todoApp");

    // Mendapatkan nilai dari input username
    var username = userInput.value;

    // Memastikan input tidak kosong
    if (username.trim() !== "") {
        // Menyimpan username yang telah login
        currentUser = username;

        // Menampilkan Todo App dan menyembunyikan form login
        loginContainer.style.display = "none";
        todoApp.style.display = "block";

        // Menampilkan username yang telah login
        document.getElementById("loggedInUser").textContent = currentUser;
    }
}

// Fungsi untuk melakukan logout
function logoutUser() {
    var loginContainer = document.getElementById("loginContainer");
    var todoApp = document.getElementById("todoApp");

    // Menghapus username yang telah login
    currentUser = null;

    // Menampilkan kembali form login dan menyembunyikan Todo App
    loginContainer.style.display = "block";
    todoApp.style.display = "none";
}

// Fungsi untuk menambahkan tugas ke dalam array dan memperbarui tampilan
function addTask() {
    var taskInput = document.getElementById("taskInput");

    // Mendapatkan nilai dari input
    var taskText = taskInput.value;

    // Memastikan input tidak kosong
    if (taskText.trim() !== "") {
        // Menambahkan tugas ke dalam array
        tasksList.push(taskText);

        // Memperbarui tampilan daftar tugas
        updateTasksList();

        // Mengosongkan input setelah ditambahkan
        taskInput.value = "";
    }
}

// Fungsi untuk menghapus tugas dari daftar
function removeTask(index) {
    // Menghapus tugas dari array berdasarkan indeks
    tasksList.splice(index, 1);

    // Memperbarui tampilan daftar tugas
    updateTasksList();
}

// Fungsi untuk memperbarui tampilan jumlah total tugas
function updateTasksCount() {
    var tasksCountElement = document.getElementById("taskCount");
    tasksCountElement.textContent = tasksList.length;
}

// Memperbarui tampilan daftar tugas
function updateTasksList() {
    var taskListElement = document.getElementById("taskList");

    // Mengosongkan daftar tugas sebelum memperbarui
    taskListElement.innerHTML = "";

    // Menambahkan setiap tugas ke dalam daftar
    for (var i = 0; i < tasksList.length; i++) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(tasksList[i]));

        // Menambahkan tombol hapus untuk setiap tugas
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.setAttribute("onclick", "removeTask(" + i + ")");
        listItem.appendChild(deleteButton);

        taskListElement.appendChild(listItem);
    }

    // Memperbarui tampilan jumlah total tugas
    updateTasksCount();
}
