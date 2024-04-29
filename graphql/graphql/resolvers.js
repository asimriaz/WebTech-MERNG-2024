export const resolvers = {
    Query: {
        greeting: async (parent, args, context, info) => {
            return "Hello World"
        },
        students: async (parent, args, { db }, info) => {
            return await db.Student.find().sort({ regno: 1 })
        },
        marks: async (parent, args, { db }, info) => {
            return await db.Mark.find().sort({ mid: 1 });
        },
        student: async (parent, args, { db }, info) => {
            return await db.Student.findOne({ regno: args.regno });
        },
    }, 
    Student:{
        marks: async (parent, args, { db }, info) => {
            return await db.Mark.find({ regno: parent.regno });
        },
    }, 
    Mutation:{
        updateMark: async (parent, args, { db }, info) => {
            return await db.Mark.findOneAndUpdate(
                { mid: args.mid },
                {
                    $set:{
                        marks: args.mark
                    }
                }, 
                { new: true }
            );
        },

    }
}