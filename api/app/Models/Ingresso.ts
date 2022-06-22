import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ingresso extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public time1: string;

  @column()
  public time2: string;

  @column()
  public horas: DateTime

  @column()
  public local: string;

  @column()
  public cod: string;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
