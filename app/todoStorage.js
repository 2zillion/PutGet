angular.module('app').service('todoStorage', function ($q) {
    var _this = this;
    this.data = [];

    this.find = function (word, callback) {
        chrome.storage.sync.get('todo', function (keys) {
            // alert(keys.todo.length);
            if (keys.todo != null) {
                result = {
                    id: -1,
                    content: "",
                    description: "not found"
                };
                for (var i = 0; i < keys.todo.length; i++) {
                    //alert(keys.todo[i].content);
                    if (keys.todo[i].content.toUpperCase() === word.toUpperCase()) {
                        // console.log(keys.todo[i].content);
                        result = keys.todo[i];
                    }
                }
                console.log(result);
                callback(result);
            }
        });
    }

    this.sync = function () {
        chrome.storage.sync.set({ todo: this.data }, function () {
            console.log('Data is stored in Chrome storage');
        });
    }

    this.add = function (newContent, newDescription) {
        var id = this.data.length + 1;
        var todo = {
            id: id,
            content: newContent,
            description: newDescription
        };

        this.data.push(todo);
        this.sync();
    }

});