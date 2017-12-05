/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        //Phonon
        phonon.options({
            navigator: {
                defaultPage: 'home',
                animatePages: true,
                enableBrowserBackButton: true,
                templateRootDirectory: './tpl'
            },
            i18n: null // for this example, we do not use internationalization
        });
        app.on({page: 'pagetwo', preventClose: true, content: 'pagetwo.html', readyDelay: 1}, function(activity) {
            
                var action = null;
            
                var onAction = function(evt) {
                    var target = evt.target;
                    action = 'ok';
            
                    if(target.getAttribute('data-order') === 'order') {
                        phonon.alert('Thank you for your order!', 'Dear customer');
            
                    } else {
                        phonon.alert('Your order has been canceled.', 'Dear customer');
                    }
                };
            
                activity.onCreate(function() {
                    document.querySelector('.order').on('tap', onAction);
                    document.querySelector('.cancel').on('tap', onAction);
                });
            
                activity.onClose(function(self) {
                    if(action !== null) {
                        self.close();
                    } else {
                        phonon.alert('Before leaving this page, you must perform an action.', 'Action required');
                    }
                });
            
                activity.onHidden(function() {
                    action = null;
                });
            
                activity.onHashChanged(function(pizza) {
                    document.querySelector('.pizza').textContent = pizza;
                });
            });

        // Kamera
    document.getElementById("kamera").addEventListener("click", cameraTakePicture);
    
        function cameraTakePicture() {
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            sourceType: Camera.PictureSourceType.CAMERA
          });
    
          function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
          }
    
          function onFail(message) {
            alert('Failed because: ' + message);
          }
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();