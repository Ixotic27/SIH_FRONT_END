{
  "name": "Institution",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the educational institution"
    },
    "type": {
      "type": "string",
      "enum": [
        "school",
        "college",
        "university"
      ],
      "description": "Type of institution"
    },
    "location": {
      "type": "string",
      "description": "City/State location"
    },
    "contact_person": {
      "type": "string",
      "description": "Name of the contact person"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Contact email"
    },
    "phone": {
      "type": "string",
      "description": "Contact phone number"
    },
    "student_count": {
      "type": "number",
      "description": "Number of students"
    },
    "staff_count": {
      "type": "number",
      "description": "Number of staff members"
    },
    "risk_profile": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "earthquake",
          "flood",
          "fire",
          "cyclone",
          "landslide",
          "other"
        ]
      },
      "description": "Natural disaster risks in the region"
    },
    "current_preparedness_level": {
      "type": "string",
      "enum": [
        "basic",
        "moderate",
        "advanced"
      ],
      "default": "basic",
      "description": "Current level of disaster preparedness"
    },
    "status": {
      "type": "string",
      "enum": [
        "inquiry",
        "demo_scheduled",
        "pilot",
        "active"
      ],
      "default": "inquiry",
      "description": "Status of engagement with the platform"
    }
  },
  "required": [
    "name",
    "type",
    "location",
    "contact_person",
    "email"
  ]
}