(function () {
    'use strict';

    angular
        .module('beerLoggerApp')
        .directive('dropzone', dropzone);

    /** @ngInject */
    function dropzone() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/dropzone/dropzone.html',
            controller: DropzoneController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function DropzoneController(Upload) {
            var vm = this;

            /* Uploading with Angular File Upload */
            var d = new Date();

            vm.title = 'drink_image_' + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
            vm.progress = {
                value: 0,
                type: 'danger',
                visible: false
            };

            vm.uploadFile = function (file) {
                vm.file = file;
                vm.progress.visible = true;

                if (file && !file.$error) {
                    file.upload = Upload.upload({
                        url: "https://api.cloudinary.com/v1_1/vytacka/upload",
                        fields: {
                            upload_preset: 'qxxjhu4f',
                            tags: 'beerlogger',
                            context: 'photo=' + vm.title
                        },
                        file: file
                    }).progress(function (e) {
                        var type;
                        var value = Math.round((e.loaded * 100.0) / e.total);

                        vm.progress.value = value;

                        if (value < 50) {
                            type = 'danger';
                        } else if (value < 100) {
                            type = 'warning';
                        } else {
                            type = 'success';
                        }

                        vm.progress.type = type;
                        file.status = 'Uploading...';
                    }).success(function (data) {
                        data.context = {custom: {photo: vm.title}};
                        file.result = data;
                        file.status = "Done!";
                    }).error(function (data) {
                        file.result = data;
                        file.status = "Error!";
                    });
                }
            };

            /* Modify the look and fill of the dropzone when file are being dragged over it */
            vm.dragOverClass = function ($event) {
                var items = $event.dataTransfer.items;
                if (items.length === 1 && items[0].kind == 'file' && items[0].type.substring(0, items[0].type.lastIndexOf('/')) == 'image') {
                    return "dropzone-dragover"
                }
                return "dropzone-dragover-err";
            };
        }
    }
})();
