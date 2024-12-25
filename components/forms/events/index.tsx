import * as Yup from 'yup';

import { Button, Input, Select } from '@/components/core';
import { IEvent, IEventInput } from '@/interfaces/event';
import React, { useState } from 'react';

import AdminService from '@/services/admin.service';
import CustomTextarea from '@/components/core/custom-textarea';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik';
import useUsers from '@/hooks/useUsers';

interface Props {
  data?: IEvent | null;
  onCancel: any;
}

const EventForm: React.FC<Props> = ({ data, onCancel }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [event, setEvent] = React.useState<IEventInput>({
    name: data?.name ?? "",
    description: data?.description || "",
    startDate: data?.startDate ? new Date(data.startDate) : new Date(),
    endDate: data?.endDate ? new Date(data.endDate) : new Date(),
    price: data?.price ?? 1,
    organizer: data?.organizer._id ?? "",
    channel: data?.channel ?? ""
  });

  const { data: organizers, isLoading, refetch } = useUsers({ limit: 10, page: 1, role: "organizer" })


  const { handleSubmit, ...form } = useFormik({
    initialValues: event,
    validationSchema: Yup.object({
      name: Yup.string().required("Event name is required"),
      channel: Yup.string().required("Event USSD Channel is required"),
      description: Yup.string().required("Description is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required").min(
        Yup.ref('startDate'), "End date cannot be before start date"
      ),
      price: Yup.number().min(1).required("Token purchase price").min(0, "Price cannot be negative")
    }),
    onSubmit: (values) => {
      // If not data, Create Event
      setLoading(true)
      if (!data) {
        AdminService.createEvent(values, (err, data) => {
          setLoading(false)
          if (!err) {
            toasts.success("New Event🎉", "Created Successfuly")

          } else {
            toasts.error("New Event👺", err)
          }
        })
      } else {
        // If Data, Update event
        AdminService.updateEvent(data._id, values, (err, data) => {
          setLoading(false)
          if (!err) {
            toasts.success("Event🎉", "Updated Successfuly")
          } else {
            toasts.error("Event Update👺", err)
          }
        })
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-full p-2">
        <Input
          id="name"
          label="Event Name"
          type="text"
          placeholder="Event Name"
          required
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.name} // Show current value
          validation={form}
        />
        <CustomTextarea
          id="description"
          label="Description"
          placeholder="Event Description"
          required
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.description} // Show current value
          validation={form}
        />

        <Select
          id="organizer"
          label="Organizer"
          placeholder="Event Organizer"
          required
          value={form.values.organizer} // Show current value
          validation={form}
          options={
            organizers?.data.map(organizer => (
              { label: organizer.name, value: organizer._id }
            )) || []
          }
          onValueChange={(value) => form.setFieldValue("organizer", value)}
        />

        {/* Row for Start and End Date */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="startDate"
            label="Start Date"
            type="date"
            placeholder="Start Date"
            required
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={new Date(form.values.startDate).toISOString().split("T")[0]} // Format date for the input field
            validation={form}
          />
          <Input
            id="endDate"
            label="End Date"
            type="date"
            placeholder="End Date"
            required
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={new Date(form.values.endDate).toISOString().split("T")[0]} // Format date for the input field
            validation={form}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="price"
            label="Price"
            type="number"
            placeholder="Enter Ticket Price"
            required
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.price} // Show current value
            validation={form}
          />
          <Input
            id="channel"
            label="USSD Channel"
            type="text"
            placeholder="eg. 713*2206"
            required
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.channel} // Show current value
            validation={form}
          />
        </div>
      </div>

      <div className="flex gap-10 p-5 w-full items-center justify-center">
        <Button onClick={onCancel} variant="outline" text="Cancel" type="button" />
        <Button variant="primary" text={loading ? "Hang on..." : data ? "Save" : "Add Event"} disabled={loading} type="submit" className="min-w-[150px]" />
      </div>
    </form>
  );
}

export default EventForm;
