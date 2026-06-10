const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'O título da tarefa é obrigatório.'],
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    dueDate: {
      type: String,
      trim: true,
      default: ''
    },
    priority: {
      type: String,
      enum: ['baixa', 'média', 'alta'],
      default: 'média'
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Cria um campo id mais simples para o app mobile usar.
taskSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

taskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
  }
});

module.exports = mongoose.model('Task', taskSchema);
