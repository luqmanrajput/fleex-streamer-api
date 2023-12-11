import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SourceDocument = Source & Document;

@Schema({ timestamps: true })
export class Source {
  @Prop()
  protocol: string;

  @Prop()
  url: string;

  @Prop()
  path: string;

  @Prop()
  address: string;

  @Prop()
  port: string;

  @Prop()
  nic: string;

  @Prop()
  online: boolean;

  @Prop()
  enabled: boolean;

  @Prop()
  hasAudio: boolean;

  @Prop()
  hasVideo: boolean;

  @Prop()
  codecAudio: string;

  @Prop()
  codecVideo: string;

  @Prop()
  width: number;

  @Prop()
  height: number;
}
export const SourceSchema = SchemaFactory.createForClass(Source);
