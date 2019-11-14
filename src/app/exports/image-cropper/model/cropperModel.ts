import {PointPool} from './point';
import {CornerMarker} from './cornerMarker';
import {DragMarker} from './dragMarker';
import {CropperTouch} from './position';

export class CropperModel {
  public isMouseDown: boolean;
  protected canvas: HTMLCanvasElement;
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;
  protected canvasWidth: number;
  protected canvasHeight: number;
  protected keepAspect: boolean;
  protected touchRadius: number;
  protected currentDragTouches: Array<CropperTouch>;
  protected ratioW: number;
  protected ratioH: number;
  protected fileType: string;
  protected imageSet: boolean;
  protected pointPool: PointPool;
  protected buffer: HTMLCanvasElement;
  protected cropCanvas: HTMLCanvasElement;
  protected tl: CornerMarker;
  protected tr: CornerMarker;
  protected bl: CornerMarker;
  protected br: CornerMarker;
  protected markers: Array<CornerMarker>;
  protected center: DragMarker;
  protected ctx: CanvasRenderingContext2D;
  protected aspectRatio: number;
  protected currentlyInteracting: boolean;
  protected srcImage: HTMLImageElement;
  protected vertSquashRatio: number;
  protected minXClamp: number;
  protected minYClamp: number;
  protected maxXClamp: number;
  protected maxYClamp: number;
  protected minHeight: number;
  protected minWidth: number;
  protected cropWidth: number;
  protected cropHeight: number;
  protected croppedImage: HTMLImageElement;
}
