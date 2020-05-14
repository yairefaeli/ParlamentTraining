import { Component, OnInit } from '@angular/core';
import { ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less'],
  providers: [ViewerConfiguration]
})
export class GameComponent implements OnInit {

  flyToOptions = {
    duration: 0,
    destination: Cesium.Cartesian3.fromRadians(0.6, 0.55, 690000)
  };

  constructor(private viewerConfig: ViewerConfiguration) {
    viewerConfig.viewerOptions = {
      imageryProvider: Cesium.createTileMapServiceImageryProvider({
        url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
      }),
      animation: false,
      geocoder: false,
      timeline: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      homeButton: false,
      infoBox: true,
      sceneModePicker: false,
      sceneMode: Cesium.SceneMode.SCENE2D,
      selectionIndicator: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false
    };
  }

  ngOnInit() {
  }

}
