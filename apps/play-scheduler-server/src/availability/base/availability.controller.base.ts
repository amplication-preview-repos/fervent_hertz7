/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AvailabilityService } from "../availability.service";
import { AvailabilityCreateInput } from "./AvailabilityCreateInput";
import { Availability } from "./Availability";
import { AvailabilityFindManyArgs } from "./AvailabilityFindManyArgs";
import { AvailabilityWhereUniqueInput } from "./AvailabilityWhereUniqueInput";
import { AvailabilityUpdateInput } from "./AvailabilityUpdateInput";

export class AvailabilityControllerBase {
  constructor(protected readonly service: AvailabilityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Availability })
  async createAvailability(
    @common.Body() data: AvailabilityCreateInput
  ): Promise<Availability> {
    return await this.service.createAvailability({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Availability] })
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async availabilities(
    @common.Req() request: Request
  ): Promise<Availability[]> {
    const args = plainToClass(AvailabilityFindManyArgs, request.query);
    return this.service.availabilities({
      ...args,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async availability(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    const result = await this.service.availability({
      where: params,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAvailability(
    @common.Param() params: AvailabilityWhereUniqueInput,
    @common.Body() data: AvailabilityUpdateInput
  ): Promise<Availability | null> {
    try {
      return await this.service.updateAvailability({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endTime: true,
          id: true,
          startTime: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAvailability(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    try {
      return await this.service.deleteAvailability({
        where: params,
        select: {
          createdAt: true,
          endTime: true,
          id: true,
          startTime: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
